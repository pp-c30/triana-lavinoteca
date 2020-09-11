import { createPool } from "promise-mysql";
export async function conexion()
{
    const coneect = await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'rest_api'
    })
return coneect;
}
