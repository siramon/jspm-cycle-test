import {run} from '@cycle/core'
import {div, label, input, makeDOMDriver} from '@cycle/dom'

function main(sources) {
    console.log('does it work?');
}

run(main, {
    DOM: makeDOMDriver('#app')
});