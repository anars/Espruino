/**
* Espruino Board Information
* Copyright (c) 2014 Anar Software LLC. < http://anars.com >
*
* This program is free software: you can redistribute it and/or modify it under
* the terms of the GNU General Public License as published by the Free Software
* Foundation, either version 3 of the License, or (at your option) any later
* version.
*
* This program is distributed in the hope that it will be useful, but WITHOUT
* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
* FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with
* this program. If not, see < http://www.gnu.org/licenses/ >
*
*/

/*

This script prints detail board, firmware, ram, flash information.

Internal flash memory on the chip :
+---------+
|0x8000000| -> process.memory().flash_start
|         |
|0x8002800| -> Bootloader ends
|         |
|         |
|         |
|0x80351E4| -> process.memory().flash_binary_end
|         | -> spare flash memory area
|0x8037000| -> process.memory().flash_code_start
|         |
|         |
|         |
|0x8040000| -> process.memory().flash_start + process.memory().flash_length
+---------+

More information about internal flash memory on the chip is
at http://www.espruino.com/STM32F1Flash

Created 4 July 2014
by Kay Anar
Modified 14 July 2014
by Kay Anar

*/

var BINARY_STARTS = 134227968;

function formatMemory(value)
{
    if ((value >> 10) & 0x3FF)
        value = value + " Bytes (" + (value >>> 10) + "." + (value & (0x3FF)) + " KB)";
    else if ((value >> 1) & 0x3FF)
        value = (value >>> 1) + " Bytes";
    else
        value = value + " Byte";
    return(value);
}

function formatAddress(value)
{
    return(value + " (0x" + value.toString(16).toUpperCase() + ")");
}

function onInit()
{
var memory = process.memory();

print("Formatted Espruino Information");
print(" ");
print("Board");
print("-----");
print("Name        :", process.env.BOARD);
print("Chip        :", process.env.CHIP);
print("Chip Family :", process.env.CHIP_FAMILY);
print("RAM         :", formatMemory(process.env.RAM));
print("Serial #    :", process.env.SERIAL);
print("Console     :", process.env.CONSOLE);
print("Voltage     :", Math.round(E.getAnalogVRef() * 10) / 10, "Volts");
print("Temperature :", Math.round(E.getTemperature() * 10) / 10, "Celsius");
print(" ");
print("Firmware");
print("-----");
print("Version     :", process.env.VERSION);
print("Build Date  :", process.env.BUILD_DATE);
print("Build Time  :", process.env.BUILD_TIME);
print("Git Commit  :", process.env.GIT_COMMIT);
print(" ");
print("Random Access Memory");
print("--------------------");
print("Free        :", formatMemory(memory.free));
print("Used        :", formatMemory(memory.usage));
print("Total       :", formatMemory(memory.total));
print("History     :", formatMemory(memory.history));
print(" ");
print("Flash Memory");
print("------------");
print("Size        :", formatMemory(memory.flash_length));
print("Starts      :", formatAddress(memory.flash_start));
print("Ends        :", formatAddress(memory.flash_start + memory.flash_length));
print(" ");
print("User Flash Memory");
print("-----------------");
print("Size        :", formatMemory(memory.flash_code_start - memory.flash_binary_end));
print("Starts      :", formatAddress(memory.flash_binary_end));
print("Ends        :", formatAddress(memory.flash_code_start));
print(" ");
print("Binary");
print("------");
print("Starts      :", formatAddress(BINARY_STARTS));
print("Ends        :", formatAddress(memory.flash_binary_end));
print("Size        :", formatMemory(memory.flash_binary_end - BINARY_STARTS));
print(" ");
print("Code");
print("----");
print("Starts      :", formatAddress(memory.flash_code_start));
print("Ends        :", formatAddress(memory.flash_start + memory.flash_length));
print("Size        :", formatMemory(memory.flash_start + memory.flash_length - memory.flash_code_start));
memory = null;
}

onInit();