"use client"
import React, { useState } from "react";
import { X, ChevronDown, ChevronUp, Filter } from "lucide-react";
import { FilterOptions } from "@/types";
import { Button } from "../ui/button";

interface FiltersProps {
  categories: string[];
  materials: string[];
  colors: string[];
  priceRange: [number, number];
  currentFilters: Partial<FilterOptions>;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
  onClearFilters: () => void;
}

export const Filters: React.FC<FiltersProps> = ({
  categories,
  materials,
  colors,
  priceRange,
  currentFilters,
  onFilterChange,
  onClearFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localPriceRange, setLocalPriceRange] = useState<[number, number]>(
    currentFilters.priceRange || priceRange
  );

  const toggleCategory = (category: string) => {
    const newCategories = currentFilters.category?.includes(category)
      ? currentFilters.category.filter((c) => c !== category)
      : [...(currentFilters.category || []), category];

    onFilterChange({ ...currentFilters, category: newCategories });
  };

  const toggleMaterial = (material: string) => {
    const newMaterials = currentFilters.material?.includes(material)
      ? currentFilters.material.filter((m) => m !== material)
      : [...(currentFilters.material || []), material];

    onFilterChange({ ...currentFilters, material: newMaterials });
  };

  const toggleColor = (color: string) => {
    const newColors = currentFilters.color?.includes(color)
      ? currentFilters.color.filter((c) => c !== color)
      : [...(currentFilters.color || []), color];

    onFilterChange({ ...currentFilters, color: newColors });
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = parseFloat(e.target.value);
    const newRange = [...localPriceRange] as [number, number];
    newRange[index] = value;
    setLocalPriceRange(newRange);
  };

  const applyPriceRange = () => {
    onFilterChange({ ...currentFilters, priceRange: localPriceRange });
  };

  // Count active filters
  const activeFilterCount =
    (currentFilters.category?.length || 0) +
    (currentFilters.material?.length || 0) +
    (currentFilters.color?.length || 0) +
    (currentFilters.priceRange ? 1 : 0);

  return (
    <div className="mb-8">
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          icon={<Filter size={16} />}
          className="w-full justify-between"
        >
          <span>
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </Button>
      </div>

      {/* Desktop Filters */}
      <div
        className={`
          lg:block 
          ${isOpen ? "block" : "hidden"} 
          bg-white p-4 rounded-lg border border-gray-200
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-900">Filters</h3>
          {activeFilterCount > 0 && (
            <button
              onClick={onClearFilters}
              className="text-sm text-amber-800 hover:text-amber-900"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-2">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-amber-800 focus:ring-amber-800"
                  checked={currentFilters.category?.includes(category) || false}
                  onChange={() => toggleCategory(category)}
                />
                <span className="ml-2 text-gray-600 capitalize">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Material Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-2">Material</h4>
          <div className="space-y-2">
            {materials.map((material) => (
              <label key={material} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-amber-800 focus:ring-amber-800"
                  checked={currentFilters.material?.includes(material) || false}
                  onChange={() => toggleMaterial(material)}
                />
                <span className="ml-2 text-gray-600 capitalize">
                  {material}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-2">Color</h4>
          <div className="space-y-2">
            {colors.map((color) => (
              <label key={color} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-amber-800 focus:ring-amber-800"
                  checked={currentFilters.color?.includes(color) || false}
                  onChange={() => toggleColor(color)}
                />
                <span className="ml-2 text-gray-600 capitalize">{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Price Range</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1/2">
                <label className="text-xs text-gray-500">Min</label>
                <div className="mt-1 relative rounded-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    className="focus:ring-amber-800 focus:border-amber-800 block w-full pl-7 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                    value={localPriceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    min={priceRange[0]}
                    max={localPriceRange[1]}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label className="text-xs text-gray-500">Max</label>
                <div className="mt-1 relative rounded-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    className="focus:ring-amber-800 focus:border-amber-800 block w-full pl-7 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                    value={localPriceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    min={localPriceRange[0]}
                    max={priceRange[1]}
                  />
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={applyPriceRange}
              fullWidth
            >
              Apply Price Range
            </Button>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {activeFilterCount > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {currentFilters.category?.map((category) => (
            <span
              key={category}
              className="inline-flex items-center bg-amber-50 text-amber-800 text-xs rounded-full px-3 py-1"
            >
              {category}
              <button
                onClick={() => toggleCategory(category)}
                className="ml-1 text-amber-800 hover:text-amber-900"
              >
                <X size={14} />
              </button>
            </span>
          ))}

          {currentFilters.material?.map((material) => (
            <span
              key={material}
              className="inline-flex items-center bg-amber-50 text-amber-800 text-xs rounded-full px-3 py-1"
            >
              {material}
              <button
                onClick={() => toggleMaterial(material)}
                className="ml-1 text-amber-800 hover:text-amber-900"
              >
                <X size={14} />
              </button>
            </span>
          ))}

          {currentFilters.color?.map((color) => (
            <span
              key={color}
              className="inline-flex items-center bg-amber-50 text-amber-800 text-xs rounded-full px-3 py-1"
            >
              {color}
              <button
                onClick={() => toggleColor(color)}
                className="ml-1 text-amber-800 hover:text-amber-900"
              >
                <X size={14} />
              </button>
            </span>
          ))}

          {currentFilters.priceRange && (
            <span className="inline-flex items-center bg-amber-50 text-amber-800 text-xs rounded-full px-3 py-1">
              ${currentFilters.priceRange[0]} - ${currentFilters.priceRange[1]}
              <button
                onClick={() =>
                  onFilterChange({ ...currentFilters, priceRange: undefined })
                }
                className="ml-1 text-amber-800 hover:text-amber-900"
              >
                <X size={14} />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};
