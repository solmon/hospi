export * from './yup-resolver'
export { createYupForm, type YupFormType } from './create-yup-form'
export type { AnyObjectSchema } from './types'
import { createYupForm } from './create-yup-form'
import { createYupStepForm } from './create-yup-step-form'

export const Form = createYupForm()

export const StepForm = createYupStepForm()
