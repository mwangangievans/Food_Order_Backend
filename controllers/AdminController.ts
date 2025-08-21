import { Request, Response, NextFunction } from "express";
import { CreateVadorInput } from "../dto";
import { Vandor } from "../models";
import { GeneratePassword, generateSalt } from "../utility";


export const findVador = async (id: string | undefined, email?: string,) => {
    if (email) {
        return await Vandor.findOne({ email: email });
    } else {
        return await Vandor.findById(id);
    }
}


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
export const GetVadors = async (req: Request, res: Response, next: NextFunction) => {

    const vandors = await Vandor.find()
    if (!vandors || vandors.length === 0) {
        return res.status(404).json({ message: "No vandors found" });
    }
    return res.json(vandors);
}

export const GetVadorById = async (req: Request, res: Response, next: NextFunction) => {
    const vandorId = req.params.id;


    const vador = await findVador(vandorId);
    debugger
    if (vador) {
        return res.json(vador);
    }
    const id = vandorId;
    if (!id) {
        return res.status(400).json({ message: "Invalid Vandor ID" });
    }

}


