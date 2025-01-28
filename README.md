# Unexpected Behavior of Optional Parameters with undefined and null in TypeScript

This example demonstrates a subtle issue with optional parameters in TypeScript when explicitly passing `undefined` or `null`.  The default parameter value is only applied when the parameter is omitted entirely, not when it's explicitly set to `undefined` or `null`. 

## Problem

The `printName` function is designed to print a name, with a default value of "Unknown" if no name is provided.  However, passing `undefined` or `null` still prints those values instead of "Unknown".

## Solution

To resolve the issue,  we can use a more robust approach to handle optional parameters. Check for both `undefined` and `null` values before assigning the default value.