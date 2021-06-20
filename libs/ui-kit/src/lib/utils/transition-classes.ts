
import classNames from 'classnames'
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition'

export function transitionClasses(styles: { [key: string]: string }, baseClassName: string): CSSTransitionClassNames {
  return {
    appear: classNames(styles[`${baseClassName}--appear`]),
    appearActive: classNames(styles[`${baseClassName}--appear-active`]),
    appearDone: classNames(styles[`${baseClassName}--appear-done`]),
    enter: classNames(styles[`${baseClassName}--enter`]),
    enterActive: classNames(styles[`${baseClassName}--enter-active`]),
    enterDone: classNames(styles[`${baseClassName}--enter-done`]),
    exit: classNames(styles[`${baseClassName}--exit`]),
    exitActive: classNames(styles[`${baseClassName}--exit-active`]),
    exitDone: classNames(styles[`${baseClassName}--exit-done`]),
  }
}
