# TDD Workshop

## Values
- Communication
- Simplicity
- Feedback
- Honesty
- Respect

**With XP and TDD your code will naturally follow the previous values**

When doing TDD you spend less time debugging because you write code that already works

We do Pair programming because we enforce communication and give feedback. With pair programming we don't even need Pull Requests. Learning from others. Promotes respect.

## The TDD process
- First of all **THINK** (before you start coding)
- Do an analysis and identify the TODO list, then ORDER it from simple to complex
- Start with the happy path (not by the edge cases)
- **RED TEST** 
- 20 seconds to **make it pass** (don't think, be quick and dirty)
- **Refactor**: better *naming*, good *abstractions*, *duplication* (DRY), *avoid surprises* in code to a reader (you are able to read the code and you understand what it's going to do, it doesn't do other things that you don't expect). Re-read your yesterday's code

When you write an assert you have to have business in mind. Business should be able to understand.

Do small steps, if you write a boolean function your production code will return true or false. Don't overthink.

## Katas

### Kata 1
http://osherove.com/tdd-kata-1/

### Kata 2: Word wrap
```
"hola", 2 => "ho\nla"
"holamundo", 7 => "holamun\ndo"
"hola mundo", 7 => "hola\nmundo"
"abc", 5 => "abc"
```

## Suggestions
- Do microcommits: after a green, even sometimes after a red
- In JS use pure functions (and closures for private functions)
- Reasons to change: 
  - Simmetry and abstraction level: all functions to have the same level of abstraction
  - Do not aim for reusability
  - Transformation priority premise: use recursion before doing loops (see https://8thlight.com/blog/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html)

## Resources
xUnit Test Doubles: Mock, Spy, Stub, Fake, Dummie

## What is a good test?
- Fast
- Independent (one suite does not depend from other)
- Repeteable
- Self-validating
- Timely - write first if possible

## Outcomes
- Think before coding
- More pair programming
- KISS 
- Consider to use Mocks/Test doubles
- Test as business requirements
  - Concise, precise, abstract
  - Don't duplicate test body in the description
  - Describe behaviour
- Refactor your tests (they are first class citizens)
- Keep tests green when refactoring
- Think harder if you can't find baby steps
- Unit tests can be BIG, they test behaviour
- TDD requires a big mindset change and discipline 
