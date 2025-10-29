import { useState, useEffect } from "react";
import books from "../data/books.json";

export default function FilterSidebar({ onFilterChange, filters }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [priceRange, setPriceRange] = useState({ min: 0, max: 50 });
    const [selectedBookTypes, setSelectedBookTypes] = useState([]);
    const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
    const [selectedAuthors, setSelectedAuthors] = useState([]);
    const [showDiscountOnly, setShowDiscountOnly] = useState(false);
    const [expandedSections, setExpandedSections] = useState({
        ageWise: false,
        browseTypes: true,
        popularTopics: false,
        moreForKids: false,
        topInfluencers: false,
        author: false,
    });

    // Get unique values from books data
    const uniqueCategories = [...new Set(books.map(b => b.category).filter(Boolean))];
    const uniqueThemes = [...new Set(books.map(b => b.theme))];
    const uniqueAuthors = [...new Set(books.map(b => b.author))].sort();
    const allBookTypes = [...uniqueCategories, ...uniqueThemes];

    const ageGroups = ["0-6 months", "6-12 months", "1-2 years", "2-4 years", "4+ years"];

    // Initialize price range based on actual book prices
    useEffect(() => {
        const prices = books.map(b => b.price);
        const minPrice = Math.floor(Math.min(...prices));
        const maxPrice = Math.ceil(Math.max(...prices));
        setPriceRange({ min: minPrice, max: maxPrice });
    }, []);

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        updateFilters({ search: value });
    };

    const handlePriceChange = (type, value) => {
        const newRange = { ...priceRange, [type]: Number(value) };
        setPriceRange(newRange);
        updateFilters({ priceRange: newRange });
    };

    const handleBookTypeToggle = (type) => {
        const newTypes = selectedBookTypes.includes(type)
            ? selectedBookTypes.filter(t => t !== type)
            : [...selectedBookTypes, type];
        setSelectedBookTypes(newTypes);
        updateFilters({ bookType: newTypes });
    };

    const handleAgeGroupToggle = (age) => {
        const newAges = selectedAgeGroups.includes(age)
            ? selectedAgeGroups.filter(a => a !== age)
            : [...selectedAgeGroups, age];
        setSelectedAgeGroups(newAges);
        updateFilters({ ageGroup: newAges });
    };

    const handleAuthorToggle = (author) => {
        const newAuthors = selectedAuthors.includes(author)
            ? selectedAuthors.filter(a => a !== author)
            : [...selectedAuthors, author];
        setSelectedAuthors(newAuthors);
        updateFilters({ authors: newAuthors });
    };

    const handleDiscountToggle = () => {
        const newValue = !showDiscountOnly;
        setShowDiscountOnly(newValue);
        updateFilters({ hasDiscount: newValue });
    };

    const updateFilters = (newFilter) => {
        const updatedFilters = { ...filters, ...newFilter };
        onFilterChange(updatedFilters);
    };

    const clearAllFilters = () => {
        setSearchTerm("");
        setSelectedBookTypes([]);
        setSelectedAgeGroups([]);
        setSelectedAuthors([]);
        setShowDiscountOnly(false);
        const prices = books.map(b => b.price);
        const resetRange = { min: Math.floor(Math.min(...prices)), max: Math.ceil(Math.max(...prices)) };
        setPriceRange(resetRange);
        onFilterChange({});
    };

    return (
        <div className="w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-6 h-full overflow-y-auto">
            {/* Browse Categories Button */}
            <div className="mb-6">
                <button className="w-full bg-tt-gold text-white  text-white px-4 py-3 rounded-lg flex items-center justify-between font-medium transition-colors">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">☰</span>
                        BROWSE CATEGORIES
                    </div>
                    <span>▼</span>
                </button>
            </div>

            {/* Filter Section */}
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">⚙️</span>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Filter</h3>
                    <button
                        onClick={clearAllFilters}
                        className="ml-auto bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                        RESET
                    </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Product"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
                    </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Price</h4>
                    <div className="space-y-3">
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Min Price</label>
                                <input
                                    type="number"
                                    value={priceRange.min}
                                    onChange={(e) => handlePriceChange('min', e.target.value)}
                                    className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm"
                                    min="0"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Max Price</label>
                                <input
                                    type="number"
                                    value={priceRange.max}
                                    onChange={(e) => handlePriceChange('max', e.target.value)}
                                    className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm"
                                    min="0"
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                type="range"
                                min="0"
                                max="50"
                                value={priceRange.max}
                                onChange={(e) => handlePriceChange('max', e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Discount Filter */}
                <div className="mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={showDiscountOnly}
                            onChange={handleDiscountToggle}
                            className="w-4 h-4 text-tt-gold bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Show discounted items only</span>
                    </label>
                </div>

                {/* Age Groups */}
                <div className="mb-6">
                    <button
                        onClick={() => toggleSection('ageWise')}
                        className="w-full flex items-center justify-between py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded"
                    >
                        <span className="font-semibold text-gray-800 dark:text-gray-200">Age Groups</span>
                        <span>{expandedSections.ageWise ? '−' : '+'}</span>
                    </button>
                    {expandedSections.ageWise && (
                        <div className="pl-4 py-2 space-y-2">
                            {ageGroups.map((age) => (
                                <label key={age} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedAgeGroups.includes(age)}
                                        onChange={() => handleAgeGroupToggle(age)}
                                        className="w-4 h-4 text-tt-gold bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                                    />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{age}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Book Types */}
                <div className="mb-6">
                    <button
                        onClick={() => toggleSection('browseTypes')}
                        className="w-full flex items-center justify-between py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded"
                    >
                        <span className="font-semibold text-gray-800 dark:text-gray-200">Book Types</span>
                        <span>{expandedSections.browseTypes ? '−' : '+'}</span>
                    </button>
                    {expandedSections.browseTypes && (
                        <div className="pl-4 py-2 space-y-2 max-h-48 overflow-y-auto">
                            {allBookTypes.map((type) => (
                                <label key={type} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedBookTypes.includes(type)}
                                        onChange={() => handleBookTypeToggle(type)}
                                        className="w-4 h-4 text-tt-gold bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                                    />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{type}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Authors */}
                <div className="mb-6">
                    <button
                        onClick={() => toggleSection('author')}
                        className="w-full flex items-center justify-between py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded"
                    >
                        <span className="font-semibold text-gray-800 dark:text-gray-200">Authors</span>
                        <span>{expandedSections.author ? '−' : '+'}</span>
                    </button>
                    {expandedSections.author && (
                        <div className="pl-4 py-2 space-y-2 max-h-48 overflow-y-auto">
                            {uniqueAuthors.map((author) => (
                                <label key={author} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedAuthors.includes(author)}
                                        onChange={() => handleAuthorToggle(author)}
                                        className="w-4 h-4 text-tt-gold bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                                    />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{author}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Active Filters Display */}
                {(selectedBookTypes.length > 0 || selectedAgeGroups.length > 0 || selectedAuthors.length > 0 || showDiscountOnly) && (
                    <div className="mt-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Active Filters:</h4>
                        <div className="flex flex-wrap gap-2">
                            {selectedBookTypes.map(type => (
                                <span key={type} className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">
                                    {type}
                                    <button onClick={() => handleBookTypeToggle(type)} className="ml-1 hover:text-tt-gold">×</button>
                                </span>
                            ))}
                            {selectedAgeGroups.map(age => (
                                <span key={age} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                                    {age}
                                    <button onClick={() => handleAgeGroupToggle(age)} className="ml-1 hover:text-blue-600">×</button>
                                </span>
                            ))}
                            {selectedAuthors.map(author => (
                                <span key={author} className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                                    {author}
                                    <button onClick={() => handleAuthorToggle(author)} className="ml-1 hover:text-green-600">×</button>
                                </span>
                            ))}
                            {showDiscountOnly && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded">
                                    On Sale
                                    <button onClick={handleDiscountToggle} className="ml-1 hover:text-red-600">×</button>
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}