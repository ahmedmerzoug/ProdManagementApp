import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'convertcharToSpaces'
})
export class ConvertTospaces implements PipeTransform
{
    transform(value: string, character : string) : string{
        return value.replace(character, ' ');
    }
}