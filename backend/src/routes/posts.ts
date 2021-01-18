import { Router } from "express";
import { PostController } from "../controllers";
import { AuthCheck } from "../middlewares";
const router = Router();
router.post("/posts/new", AuthCheck, PostController.createPost);
router.put("/posts/edit", AuthCheck, PostController.editPost);
router.delete("/posts/delete/{id}", AuthCheck, PostController.deletePost);
router.get("/posts/postofuser", AuthCheck, PostController.getPostOfUser);
router.get("/posts/reportedPost", AuthCheck, PostController.getReportedPost);
export default router;