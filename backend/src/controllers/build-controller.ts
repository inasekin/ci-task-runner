import { Request, Response } from 'express';

export const startBuild = (req: Request, res: Response) => {
    // Здесь логика запуска сборки
    res.status(200).send('Build started');
};

export const getBuildStatus = (req: Request, res: Response) => {
    const { id } = req.params;
    // Здесь логика получения статуса сборки
    res.status(200).send(`Status for build ${id}`);
};
