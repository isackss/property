// app/actions/clientActions.ts
'use server';

import { dbConnect } from '@/lib/mongodb';
import { Client } from '@/models/Client';
import mongoose from 'mongoose';
import { revalidatePath } from 'next/cache';

export async function fetchClientById(id: string) {
    await dbConnect();
    const client = await Client.findById(id).lean();
    return JSON.parse(JSON.stringify(client));
}

export async function createClient(prevState: unknown, formData: FormData) {
    await dbConnect();

    try {
        const rawFormData = {
            name: formData.get('name'),
            type: formData.get('type'),
            contact: formData.get('contact'),
            beneficiary: formData.get('beneficiary'),
            property: formData.get('property'),
            paymentInstructions: formData.get('paymentInstructions'),
            companyName: formData.get('companyName'),
            identificationNumber: formData.get('identificationNumber'),
            email: formData.get('email'),
            phone: formData.get('phone'),
        };
        console.log('Creating client with data:', rawFormData);

        await Client.create(rawFormData);
        // Next.js 16: Revalidamos la ruta para actualizar el listado instantáneamente
        revalidatePath('/clients');
        return { success: true, message: 'Cliente creado con éxito' };
    } catch (error: unknown) {
        if (error instanceof mongoose.Error.ValidationError) {
            return {
                error: 'Error al crear el cliente. Verifique los datos ingresados.',
            };
        }
        throw error;
    }
}

export async function updateClient(
    id: string,
    prevState: unknown,
    formData: FormData
) {
    await dbConnect();

    try {
        const rawFormData = {
            name: formData.get('name'),
            type: formData.get('type'),
            contact: formData.get('contact'),
            beneficiary: formData.get('beneficiary'),
            property: formData.get('property'),
            paymentInstructions: formData.get('paymentInstructions'),
            companyName: formData.get('companyName'),
            identificationNumber: formData.get('identificationNumber'),
            email: formData.get('email'),
            phone: formData.get('phone'),
        };

        await Client.findByIdAndUpdate(id, rawFormData);
        revalidatePath('/clients');
        return { success: true, message: 'Cliente actualizado con éxito!' };
    } catch (error: unknown) {
        if (error instanceof mongoose.Error.ValidationError) {
            return { error: 'Error al actualizar el cliente.' };
        }
        throw error;
    }
}

export async function deleteClient(id: string) {
    await dbConnect();
    await Client.findByIdAndDelete(id);
    revalidatePath('/clients');
}
