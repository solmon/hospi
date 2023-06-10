import * as React from 'react'

import {
  chakra,
  forwardRef,
  Menu,
  MenuProps,
  MenuButton,
  MenuList,
  MenuListProps,
  MenuItemOption,
  MenuOptionGroup,
  Button,
  ButtonProps,
  omitThemingProps,
  useMultiStyleConfig,
  SystemStyleObject,
  MenuItemOptionProps,
  useFormControlContext,
} from '@chakra-ui/react'
import { cx, dataAttr } from '@chakra-ui/utils'
import { ChevronDownIcon } from '@hp-ui/core'

import { FieldOption } from '../types'

import {
  SelectOptions,
  SelectProvider,
  useSelect,
  useSelectContext,
} from './select-context'

export interface SelectOption
  extends Omit<MenuItemOptionProps, 'value'>,
    FieldOption {}

export interface SelectProps
  extends Omit<MenuProps, 'children'>,
    SelectOptions {}

export interface SelectButtonProps extends ButtonProps {}

/**
 * Button that opens the select menu and displays the selected value.
 *
 * @see https://saas-ui.dev/docs/components/forms/select
 */
export const SelectButton = forwardRef<SelectButtonProps, 'button'>(
  (props, ref) => {
    const styles = useMultiStyleConfig('SuiSelect', props)

    const {
      displayValue,
      renderValue,
      placeholder,
      isDisabled: isSelectDisabled,
    } = useSelectContext()

    const context = useFormControlContext()

    const {
      isInvalid,
      isReadOnly,
      isDisabled,
      isFocused,
      isRequired,
      id,
      onBlur,
      onFocus,
    } = context || {}

    const { rightIcon = <ChevronDownIcon />, ...rest } = props

    /* @ts-ignore */
    const focusStyles = styles.field?._focusVisible
    /* @ts-ignore */
    const readOnlyStyles = styles.field?._readOnly
    /* @ts-ignore */
    const invalid = styles.field?._invalid

    const height = styles.field?.h || styles.field?.height

    const buttonStyles: any = {
      fontWeight: 'normal',
      textAlign: 'left',
      color: 'inherit',
      _active: {
        bg: 'transparent',
      },
      minH: height,
      _focus: focusStyles,
      _expanded: focusStyles,
      _readOnly: readOnlyStyles,
      _invalid: invalid,
      ...styles.field,
      h: 'auto',
    }

    // Using a Button, so we can simply use leftIcon and rightIcon
    return (
      <MenuButton
        as={Button}
        id={id || React.useId()}
        {...buttonStyles}
        {...rest}
        onFocus={onFocus}
        onBlur={onBlur}
        isDisabled={isDisabled || isSelectDisabled}
        data-invalid={dataAttr(isInvalid)}
        data-read-only={dataAttr(isReadOnly)}
        data-focus={dataAttr(isFocused)}
        data-required={dataAttr(isRequired)}
        rightIcon={rightIcon}
        ref={ref}
      >
        {renderValue(displayValue) || placeholder}
      </MenuButton>
    )
  }
)

SelectButton.displayName = 'SelectButton'

/**
 * Allow users to select a value from a list of options.
 *
 * @see https://saas-ui.dev/docs/components/forms/select
 */
export const Select = forwardRef<SelectProps, 'select'>((props, ref) => {
  const { name, children, isDisabled, multiple, ...rest } = props

  const menuProps = omitThemingProps(rest)

  const context = useSelect(props)

  const { value, controlProps } = context

  return (
    <SelectProvider value={context}>
      <Menu {...menuProps} closeOnSelect={!multiple}>
        <chakra.div className={cx('sui-select')}>
          {children}
          <chakra.input
            {...controlProps}
            ref={ref}
            name={name}
            type="hidden"
            value={value || ''}
            className="saas-select__input"
          />
        </chakra.div>
      </Menu>
    </SelectProvider>
  )
})

export interface SelectListProps extends MenuListProps {}

/**
 * The list of options to choose from.
 *
 * @see https://saas-ui.dev/docs/components/forms/select
 */
export const SelectList: React.FC<SelectListProps> = (props) => {
  const { defaultValue, value, options, multiple, onChange } =
    useSelectContext()

  return (
    <MenuList maxH="100vh" overflowY="auto" {...props}>
      <MenuOptionGroup
        defaultValue={(defaultValue || value) as string | string[] | undefined}
        value={value}
        onChange={onChange}
        type={multiple ? 'checkbox' : 'radio'}
      >
        {options
          ? options.map(({ value, label, ...rest }, i) => (
              <SelectOption key={i} value={value} {...rest}>
                {label || value}
              </SelectOption>
            ))
          : props.children}
      </MenuOptionGroup>
    </MenuList>
  )
}

Select.displayName = 'Select'

/**
 * An option in a select list
 *
 * @see https://saas-ui.dev/docs/components/forms/select
 */
export const SelectOption = forwardRef<MenuItemOptionProps, 'button'>(
  (props, ref) => {
    return <MenuItemOption ref={ref} {...props} />
  }
)
SelectOption.id = 'MenuItemOption'
SelectOption.displayName = 'SelectOption'
