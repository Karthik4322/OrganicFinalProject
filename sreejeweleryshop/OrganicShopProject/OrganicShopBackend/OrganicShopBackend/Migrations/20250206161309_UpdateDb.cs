using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OrganicShopBackend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 1,
                column: "Images",
                value: "[\"https://www.freepngimg.com/thumb/potato/7-potato-png-images-pictures-download-thumb.png\"]");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 2,
                column: "Images",
                value: "[\"https://www.freepngimg.com/thumb/onion/10-red-onion-png-image-thumb.png\"]");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 4,
                columns: new[] { "Images", "Title" },
                values: new object[] { "[\"https://pngimg.com/uploads/beet/beet_PNG28.png\"]", "Beetroot" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 5,
                column: "Images",
                value: "[\"https://www.freepngimg.com/thumb/categories/2985.png\"]");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 6,
                column: "Images",
                value: "[\"https://cdn.dummyjson.com/products/images/vegetables/Carrot/thumbnail.png\"]");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 7,
                column: "Category",
                value: "essentials");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 8,
                columns: new[] { "Category", "Images", "Title" },
                values: new object[] { "essentials", "[\"https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png\"]", "Cooking Oil" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 9,
                columns: new[] { "Category", "Images", "Title" },
                values: new object[] { "essentials", "[\"https://cdn.dummyjson.com/products/images/groceries/Rice/1.png\"]", "Rice" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 10,
                columns: new[] { "Category", "Images", "Title" },
                values: new object[] { "essentials", "[\"https://cdn.dummyjson.com/products/images/groceries/Water/1.png\"]", "Water" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 11,
                columns: new[] { "Category", "Images", "Title" },
                values: new object[] { "essentials", "[\"https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/1.png\"]", "Protein Powder" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 12,
                column: "Images",
                value: "[\"https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png\"]");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 22,
                column: "Images",
                value: "[\"https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                column: "PasswordHash",
                value: "$2a$11$LRJYjCT941X9JyHLicfd7OiwvapKm3B1wq47z.nme/dPpmTuyBHBi");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 1,
                column: "Images",
                value: "[\"https://cdn.dummyjson.com/products/images/groceries/Potatoes/1.png\"]");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 2,
                column: "Images",
                value: "[\"https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/1.png\"]");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 4,
                columns: new[] { "Images", "Title" },
                values: new object[] { "[\"https://pixabay.com/get/g1b17eba27df6f4f681f4bb1e9ae2102e2e81756e64dc7723a66ca573577f243fb9df0ab1cd83fd529c9535a6f34d6dc08ebe0439c2e2235d7aa2a085f233ab3c_1280.png\"]", "Broccoli" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 5,
                column: "Images",
                value: "[\"https://pixabay.com/get/g3c064f77e6790ec8d35b90cae5f245790c9bcb61588e055cc39f91d53a2e6aa2a0eca0cdfea5674c2d92b96f107fc037a46e7552a1d64c77e84ebaeb77a49ca7_1280.png\"]");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 6,
                column: "Images",
                value: "[\"https://pixabay.com/get/g713b394cac9b414df164d361727e3efd2c02e91ba69ce979f2b3de1f196ea6458edd2c85a9d69ebd03c01f480eceabee2e0c28d45705c6113e1dde2697da991d_1280.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 7,
                column: "Category",
                value: "dairy");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 8,
                columns: new[] { "Category", "Images", "Title" },
                values: new object[] { "dairy", "[\"https://pixabay.com/get/gb796cbed853e0edb1ee5fcd8ae9c0ddd4b6652f9bce82f7c0ab829b09c340c6f67940709695379bfe59f64703d3886c47d418f83ccb097cc27a13179e463eca6_1280.png\"]", "Ghee" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 9,
                columns: new[] { "Category", "Images", "Title" },
                values: new object[] { "dairy", "[\"https://pixabay.com/get/g0fe29c8175f0a328a0063543a59b8ed05969958ee207305345f77722466c21566b99686b2ae94838653e8d978208e83e7a1f0545384a2272e5f78c43b83e317b_1280.png\"]", "Butter" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 10,
                columns: new[] { "Category", "Images", "Title" },
                values: new object[] { "dairy", "[\"https://pixabay.com/get/g58d541b341f4855eca50fc2fd226a42905d8362edd911572e5a6cec58c87fe97973963afa2789fa56b84882f3609254305330af9edf16ce5d9a05c071d175434_1280.png\"]", "Cheese" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 11,
                columns: new[] { "Category", "Images", "Title" },
                values: new object[] { "dairy   ", "[\"https://pixabay.com/get/g545d9d935daf898002d64100c46d0f8a63b64773a4b29c2b127bb36d55911623ec678b351909db690a4b6ccb141c5c0cfaacea4d47e43b0cc4d3aa18095c049c_1280.png\"]", "Yogurt" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 12,
                column: "Images",
                value: "[\"https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png\",\"https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png\"]");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 22,
                column: "Images",
                value: "[\"https://pixabay.com/get/g07fbaaf5af87cb8fa5b72f6170f5ce044d2df78825c7c506b649e7d151396ddcb93b19c7cdf77fb84879e65e72eff861_1280.png\"]");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                column: "PasswordHash",
                value: "$2a$11$u9VEAAxdWanRt.3iZH1r6uU35hQfS0KAaD3wM/QwS3Dn1Ff5At6py");
        }
    }
}
