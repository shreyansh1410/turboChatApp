import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = (req.headers["authorization"] || req.headers["Authorization"]) as string;
    if (!authHeader) {
      res.status(401).json({ msg: "No Authorization header provided" });
      return;
    }
    const token = authHeader.trim();
    if (!token) {
      res.status(401).json({ msg: "No token provided in Authorization header" });
      return;
    }
    const decoded = jwt.verify(token, JWT_SECRET!);
    if (typeof decoded !== "string" && "id" in decoded) {
      req.userId = decoded.id;
      next();
    } else {
      res.status(403).json({  
        msg: "Middleware has blocked your access: Invalid token payload",
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      msg: "Middleware error",
      error: err instanceof Error ? err.message : err,
    });
    return;
  }
};
