exports.id = "main";
exports.modules = {

/***/ "./src/product-crud.ts":
/*!*****************************!*\
  !*** ./src/product-crud.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar router = express_1.default.Router();\n// export const getProductList = async (req:any, res:any) => {\n//     const productList: Product[] = await ProductService.getAllProducts();\n//     console.log(`in get ${JSON.stringify(productList)}`)\n//     try {\n//         res.status(200).send(\n//             productList);\n//       } catch (e) {\n//         res.status(404).send(e.message);\n//       }\n//   };\n// export const createProduct = async (req:any, res:any) => {\n//   const product: Product = req.body;\n//   await ProductService.createProducts(product);\n//   try {\n//       res.status(200).send({\n//           message: \"Successfully added\",\n//           IsSuccess: true,\n//           result: \"\"\n//       });\n//     } catch (e) {\n//       res.status(404).send(e.message);\n//     }\n// };\n//   router.post('/about', async (req, res) => {\n//     try {\n//         var about = new Products(req.body);\n//         var result = await about.save();\n//         res.send(result);\n//     } catch (error) {\n//         res.status(500).send(error);\n//     }\n// });\n// export const updateroduct = async (req:any, res:any) => {\n//     const product: Product = req.body;\n//     await ProductService.updateProducts(product);\n//     try {\n//         res.status(200).send({\n//             message: \"Successfully updated\",\n//              IsSuccess: true,\n//              result: \"\"\n//         });\n//       } catch (e) {\n//         res.status(404).send(e.message);\n//       }\n//   };\n// export const deleteproduct = async (req:any, res:any) => {\n//   const productID: number = req.body['id'];\n//   await ProductService.deleteProducts(productID);\n//   try {\n//       res.status(200).send({\n//           message: \"Successfully deleted\",\n//            IsSuccess: true,\n//            result: \"\"\n//       });\n//     } catch (e) {\n//       res.status(404).send(e.message);\n//     }\n// };\n\n\n//# sourceURL=webpack:///./src/product-crud.ts?");

/***/ })

};