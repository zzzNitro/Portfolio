import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 640px;
  margin-top: 16px;
`

export const FormRow = styled.div`
  display: flex;
  gap: 24px;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 16px;
  }
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.02em;
`

const fieldStyles = `
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  font-family: inherit;
  color: #fff;
  transition: border-color 0.3s ease;
  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
  }
`

export const Input = styled.input`
  ${fieldStyles}
`

export const Textarea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
  min-height: 140px;
`

export const SubmitButtonWrapper = styled.div`
  align-self: flex-start;
`
