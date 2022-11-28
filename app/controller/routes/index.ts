import { Request, Response } from 'express';

export default function indexRoute(req: Request, res: Response) {
    res.send('Hello Burger Fan! Please read the README.md file for instructions on how to successfully complete this exam.');
}