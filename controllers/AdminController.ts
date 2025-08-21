import { Request, Response, NextFunction } from "express";
import { CreateVadorInput } from "../dto";
import { Vandor } from "../models";


export const CreateVador = async (req: Request, res: Response, next: NextFunction) => {

    const { name, email, password, address, foodtype, phone, ownerName, pincode } = <CreateVadorInput>req.body;


    const CreateVador = await Vandor.create({
        name: name,
        email: email,
        password: password,
        address: address,
        phone: phone,
        ownerName: ownerName,
        pincode: pincode,
        coverImage: [],
        foodtype: foodtype ? foodtype.split(',') : [],
        serviceAvailable: false,
        salt: "random_salt_value", // Replace with actual salt generation logic
        rating: 0
    })
    return res.json({
        name,
        email,
        password,
        address,
        foodtype,
        phone,
        ownerName,
        pincode
    });
    // Here you would typically save the vendor to the database

}
export const GetVador = async (req: Request, res: Response, next: NextFunction) => {

}

export const GetVadorById = async (req: Request, res: Response, next: NextFunction) => {

} 