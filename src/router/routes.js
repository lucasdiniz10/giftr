import { routes as home } from '../pages/home'
import { routes as aboutUs } from '../pages/aboutUs'
import { routes as acolhimento } from '../pages/acolhimento'
import { routes as arteCultura } from '../pages/arteCultura'
import { routes as direitosHumanos } from '../pages/direitosHumanos'
import { routes as educacao } from '../pages/educacao'
import { routes as error404 } from '../pages/error404'
import { routes as esporte } from '../pages/esporte'
import { routes as meioAmbiente } from '../pages/meioAmbiente'
import { routes as ongs } from '../pages/ongs'
import { routes as protecaoAnimal } from '../pages/protecaoAnimal'
import { routes as register } from '../pages/register'
import { routes as saude } from '../pages/saude'
import { routes as user } from '../pages/user'
import { routes as userHistoric } from '../pages/userHistoric'
import { routes as userTotal } from '../pages/userTotal'
import { routes as login } from '../modules/auth'
import { routes as emailValidation } from '../pages/passwordRecovery/emailValidation'
import { routes as newpassword } from '../pages/passwordRecovery/newPassword'
import { routes as verificationCode } from '../pages/passwordRecovery/verificationCode'
import { routes as userPersonUpdate } from '../pages/userPersonUpdate'


export default [
    ...home,
    ...aboutUs,
    ...acolhimento,
    ...arteCultura,
    ...direitosHumanos,
    ...educacao,
    ...error404,
    ...esporte,
    ...meioAmbiente,
    ...ongs,
    ...protecaoAnimal,
    ...register,
    ...saude,
    ...user,
    ...userHistoric,
    ...userTotal,
    ...userPersonUpdate,
    ...login,
    ...emailValidation,
    ...newpassword,
    ...verificationCode

]