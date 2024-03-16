import React from 'react'

export function ErrorMsg({ alertMessage}) {
  return (
	<>
		<div>
			<span className={`text-error text-xs font-bold `}>{alertMessage}</span>
		</div>
	</>
  )
}
export function WarningMsg({ alertMessage}) {
  return (
	<>
		<div>
			<span className={`text-warning text-xs font-bold `}>{alertMessage}</span>
		</div>
	</>
  )
}
export function SuccessMsg({ alertMessage}) {
  return (
	<>
		<div>
			<span className={`text-success text-xs font-bold `}>{alertMessage}</span>
		</div>
	</>
  )
}
export function InfoMsg({ alertMessage}) {
  return (
	<>
		<div>
			<span className={`text-info text-xs font-bold `}>{alertMessage}</span>
		</div>
	</>
  )
}
