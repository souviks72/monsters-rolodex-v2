import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

const name: string = "Souvik"; //this is how you type variables

/*
TYPING FUNCTIONS:

- paramaters need to be typed
- return value needs to be typed
- these are the only two values ts cares about, not what is inside the function

const <func_name>: (param1: type1, param2: type2) => <return_type> = (param1, param2) => {func definition}
*/
const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {};

/*
TYPING OBJECTS:

- either define a type or an interface
- these 2 things are very similar
- the key difference is that interfaces can be extended, and are very much like classes
- interface is defined like structs in C, interface I<name_of_interface>{ object_key: type}
- all interface names must start with and "I"
- interfaces can be combined by overloading and using extends keyword
- OVERLOADING: define the same interface twice with different definitions and they will be combined
- EXTENDS: using extends we can include another interface in the interface using this keyword
*/

/*
  using extends 

  interface ISearchBoxProps extends ISearchBoxHandler {
    className: string;
    placeholder?: string; // ? means that this value is optional
  }

  interface ISearchBoxHandler {
    onChangeHandler: (a: string) => void
  }
*/

interface ISearchBoxProps {
  className: string;
  placeholder?: string; // ? means that this value is optional
}

interface ISearchBoxProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

// TYPING OBJECTS WITH type

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>; // this is a generic, more on this later
};
// we can perform unions with types, something interfaces can't do
// union is basically saying a type can have two similar definitions
// for eg, say we need a type, NorthAmericanAddress which will have address for Canada and US
// however Canada has province while USA has state
// so we create two types, USAddress and CanadaAddress and then NorthAmericanAddress will be the union of the 2

type CanadaAddress = {
  street: string;
  province: string;
};

type USAddress = {
  street: string;
  state: string;
};

type NorthAmericanAddress = CanadaAddress | USAddress; // this is how union is performed, using | operator
// ----> Union can be done with multiple types at the same time, eg: CanadaAddress | USAddress | MexicoAddress

const address1: NorthAmericanAddress = {
  street: "2nd Street",
  state: "Texas",
};

const address2: NorthAmericanAddress = {
  street: "2nd Street",
  province: "Alberta",
};

// when to use TYPE and when to use INTERFACE:
// genrally, in functional programming, type is used
// in OOP(react class) interfaces are used

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
