export enum FileType {
    Unknown = 0,
    File,
    Directory,
    SymbolicLink
}

export interface FilePermissions {
    readonly user: number
    readonly group: number
    readonly world: number
}

/**
 * Describes a file, directory or symbolic link. Note that FTP file listings are not standardized. It depends
 * on the operating system of the FTP server how complete the information is.
 */
export class FileInfo {

    static Permission = {
        Read: 4,
        Write: 2,
        Execute: 1
    }

    name = ""
    type = FileType.Unknown
    size = 0
    permissions: FilePermissions = { user: 0, group: 0, world: 0 }
    hardLinkCount = 0
    link = ""
    group = ""
    user = ""
    date = ""
    dateParsed: Date | undefined

    constructor(name: string) {
        this.name = name
    }

    get isDirectory(): boolean {
        return this.type === FileType.Directory
    }

    get isSymbolicLink(): boolean {
        return this.type === FileType.SymbolicLink
    }

    get isFile(): boolean {
        return this.type === FileType.File
    }
}
