import {run} from '@cycle/core'
import {makeDOMDriver} from '@cycle/dom'

function main(sources) {
    console.log('does it work?');
}

run(main, {
    DOM: makeDOMDriver('#app')
});