import { Request, Response, NextFunction } from "express";
import { CreateVadorInput } from "../dto";
import { Vandor } from "../models";
import { GeneratePassword, generateSalt } from "../utility";


export const CreateVador = async (req: Request, res: Response, next: NextFunction) => {

    const { name, email, password, address, foodtype, phone, ownerName, pincode } = <CreateVadorInput>req.body;
    const existingVandor = await Vandor.findOne({ email: email });
    if (existingVandor) {
        return res.status(400).json({ message: "Vandor with this email already exists" });
    }

    //genetrate a salt and hash the password here

    const salt = await generateSalt()
    const userPassword = await GeneratePassword(password, salt)
    //encript the password using bcrypt or any other library

    const CreateVador = await Vandor.create({
        name: name,
        email: email,
        password: userPassword,
        address: address,
        phone: phone,
        ownerName: ownerName,
        pincode: pincode,
        coverImage: [],
        foodtype: foodtype,
        serviceAvailable: false,
        salt: salt,
        rating: 0
    })
    return res.json(CreateVador);
    // Here you would typically save the vendor to the database

}
export const GetVador = async (req: Request, res: Response, next: NextFunction) => {

}

export const GetVadorById = async (req: Request, res: Response, next: NextFunction) => {

}


