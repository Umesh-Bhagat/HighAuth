import React , {useReducer ,useCallback, useEffect} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import InputStyle from "../../assets/jss/Material-dashboard-react/CustomInputStyle.jsx";
import {Validate} from "../../UtilFolder/Validator";
import classNames from "classnames";

const inputReducer = (state , action) =>{
    switch (action.type) {
        case "CHANGE": 
        return {
            ...state,
            value:action.val,
            isValid:Validate(action.val,action.validators)
        };

        case "TOUCH" :
        return {
            ...state,
            isTouch:true
        }
        default:
            return state;
    }
};

const CustomInputs = ({...props} ) => {
console.log("rept2")
   const [initialState , dispatch] = useReducer(
       inputReducer , {
           value:"",
           isTouch:false,
           isValid: false
       }
   );

   const { 
       onInput, 
       id , 
       type ,
       search, 
       ClassName,
       element,
       placeholder,
       dataValue,
       NotesInputStyle,
       style,
       lableText,
       classes,
       options,
       LineInputStyle,
       UnderlineInput,
      
    } = props;

   const {value , isValid} = initialState;

   useEffect(()=>{
      onInput(value,id,isValid,options);
   }, [id,value,isValid,onInput]);

   const inputChangeHandler = (event ) =>{
       let inputData = "";
       if(event.target.value === "select"){
           inputData = "";
       }else{
           inputData = event.target.value;
       }
       dispatch({
           type:"CHANGE",
           val:inputData,
           validators:props.validators
        });
   } 


   const touchHandler = ( ) =>{
       dispatch({
           type:"TOUCH",
       })
   }

   const InputTagStyle= classNames({
     [classes.InputStyle] : true,
     [classes.LineInputStyle]:LineInputStyle,
     [classes.TheWidth]:lableText === undefined ||" ",
     [classes.search]:search,
     [classes.UnderlineInput]:UnderlineInput,
     [classes.NotesInputStyle]:NotesInputStyle
   })

   const SelectTagStyle = classNames({
       [classes.SelectElementStyle]:true
   });

   const InputLabelStyle = classNames({
       [classes.InputLabelStyle] : true
   });

    let Element = " " ;
    switch(element){
      case "input": 
      return(
             <div>
                {
                 lableText?(
                 <label /*className={InputLabelStyle}*/
                      style={{
                         fontSize:"14px",
                         color:"rgb(89, 89, 89)"
                       }}
                   >
                     {lableText} 
                 </label>
                 ):null
                }
               <input
                 id={id}
                 style={style}
                 type={type}
                 className={InputTagStyle}
                 onBlur={touchHandler}
                 placeholder={placeholder}
                 onChange={inputChangeHandler}
                 value={value}
               />
          </div>
      )
      case "textArea" :
          return( 
      <textarea 
             id={id}
             type={type}
             className={InputTagStyle}
             style={{paddingLeft:"0%"}}
             style={ClassName}
             onBlur={touchHandler}
             onChange={inputChangeHandler}
             value={value}
           />
           )
           case "select":
               console.log(options,id,element)
               return(
               <div>
                   <label
                    style={{
                        fontSize:"14px",
                        color:"rgb(89, 89, 89)",
                    }}>
                      {lableText}
                    </label>
                   <select 
                     id={id}
                     open={initialState.open}
                     className={SelectTagStyle}
                     style={style}
                     onChange={inputChangeHandler}
                   >
                      {options.map(optionMenu=>(
                         <option  key={optionMenu.displayValue} value={optionMenu.value}>{optionMenu.displayValue}</option>
                       ))}
                  </select>
               </div>
        )
      default:
        return( <input
        id={props.id}
        type={props.type}
        className={InputTagStyle}
        onChange={inputChangeHandler}
        value={initialState.value}/>)
    } ; 
}

export default withStyles(InputStyle)(CustomInputs);