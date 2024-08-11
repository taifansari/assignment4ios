import jwt from 'jsonwebtoken';
import db from '../Config/db';

/**
 * Sanitize an array of strings
 *
 * @export
 * @param {string} inputString
 * @returns {string[]}
 */
export function SanitizeArray(inputString: string | string[]): string[]
{

    if(Array.isArray(inputString)) 
    {
        return inputString.map((value) => value.trim());
    }
    else if (typeof inputString === 'string')
    {
        return inputString.split(",").map((value) => value.trim());
    }
    else 
    {
        console.error("Invalid input type");
        return [];
    }
}

/**
 * Generate a token for the user
 *
 * @export
 * @param {UserDocument} user
 * @returns {string}
 */
export function GenerateToken(user: UserDocument): string
{
    const payload = 
    {
        id: user.id,
        DisplayName: user.displayName,
        username: user.username,
        EmailAddress: user.emailAddress
    }

    const jwtOptions =
    {
        expiresIn: 604800 // 1 week
        // Note: this may be a security risk, as the token will be valid for a week
    }

    return jwt.sign(payload, db.secret, jwtOptions);
}