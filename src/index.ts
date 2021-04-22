import GenerateTemplateFiles from './GenerateTemplateFiles';
import IConfigItemDefault from './models/IConfigItem';
import StringUtilityDefault from './utilities/StringUtility';
import CaseConverterEnumDefault from './constants/CaseConverterEnum';
import IResultsDefault from './models/IResults';
import IReplacerDefault from './models/IReplacer';
import IReplacerSlotQuestionDefault from './models/IReplacerSlotQuestion';

export { StringUtilityDefault as StringUtility };
export { CaseConverterEnumDefault as CaseConverterEnum };

// Workaround for issue of exporting interfaces
export type IResults = IResultsDefault;
export type IConfigItem = IConfigItemDefault;
export type IReplacer = IReplacerDefault;
export type IReplacerSlotQuestion = IReplacerSlotQuestionDefault;
export type IPathFunction = (replacers: IReplacer[], configItem: IConfigItem) => string;

/**
 * Main method to create your template files. Accepts an array of `IConfigItem` items.
 */
export function generateTemplateFiles(data: IConfigItem[]): Promise<void> {
  return new GenerateTemplateFiles().generate(data);
}

/**
 * Main method to create your template files with command line.
 */
export function generateTemplateFilesCommandLine(data: IConfigItem[]): Promise<void> {
  return new GenerateTemplateFiles().commandLine(data);
}
