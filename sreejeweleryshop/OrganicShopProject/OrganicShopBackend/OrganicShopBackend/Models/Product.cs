using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace OrganicShopBackend.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }

        [Required]
        public decimal Price { get; set; }

        public decimal DiscountPercentage { get; set; }
        public double Rating { get; set; }

        [Required]
        public int QuantityInStock { get; set; }

        public string? Sku { get; set; }

        public double Weight { get; set; }
        public string WarrantyInformation { get; set; }
        public string ShippingInformation { get; set; }
        public string AvailabilityStatus { get; set; }
        public string ReturnPolicy { get; set; }
        public int MinimumOrderQuantity { get; set; }

        // Make Images and Thumbnail Optional
        public List<string>? Images { get; set; } // Nullable list
        public string? Thumbnail { get; set; } // Nullable string

        public string Category { get; set; }
        public List<string> Tags { get; set; }

        // Make OrderItems Optional (since it's not part of product creation)
        public List<OrderItem>? OrderItems { get; set; } // Nullable list

        [NotMapped]
        public IFormFile ImageFile { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }
    }
}