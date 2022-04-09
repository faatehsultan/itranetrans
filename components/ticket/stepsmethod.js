import React from "react"

function ChevronDots({
  className = "",
  steps = [],
  currentStep = 1,
  onStepClick = null,
  ...newProps
}) {
  let finalClass = `${className} w-full px-4 sm:px-8`
  let progressClass = `absolute top-1/2 left-0 h-2 transform rounded-md -translate-y-1/2 bg-orange-400 transition-width ease-in-out duration-500`
  const Steps = steps.map((step, index) => {
    let stepClass = "inline-block py-3 transform -translate-x-1/2 text-l"
    if (currentStep - 1 > index) stepClass += " font-medium text-red-800"
    else if (currentStep - 1 === index) stepClass += " font-medium"
    if (typeof onStepClick === "function") stepClass += " cursor-pointer"
    return (
      <div
        key={step}
        style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
        className="absolute"
      >
        <span
          className={stepClass}
          onClick={() => {
            if (typeof onStepClick === "function") onStepClick(index + 1, step)
          }}
        >
          {step}
        </span>
      </div>
    )
  })
  return (
    <div className={finalClass} {...newProps}>
      <div className="h-2px w-full bg-gray-300 relative">
        <div
          className={progressClass}
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        >
          <div className="w-4 h-4 bg-white border border-red-600 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div className="mt-3 relative hidden sm:block">{Steps}</div>
    </div>
  )
}

export default ChevronDots