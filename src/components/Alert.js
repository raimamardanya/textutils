import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
        {props.alert && (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> {/*(props.alert &&) this is important and (${props.alert.type} this is for showing the alert message in green)*/}
            <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg} {/*Adding this line */}
        </div>
        )}
    </div>
  )
}

export default Alert
