import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { COLLABRATOR_ICON, COLOR_PALATTE_ICON, REMINDER_ICON, TICK_ICON,BRUSH_ICON,IMG_ICON,PIN_ICON,ARCHIVE_ICON,MORE_ICON,UNDO_ICON,REDO_ICON } from 'src/app/assets/svg-icons';
import { NoteService } from 'src/app/services/note_services/note.service';
@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit{
  noteList = [  ]
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public noteService: NoteService) {
    iconRegistry.addSvgIconLiteral('reminder-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral('collabrator-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral('color-palatte-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON));
    iconRegistry.addSvgIconLiteral('tick-icon', sanitizer.bypassSecurityTrustHtml(TICK_ICON));
    iconRegistry.addSvgIconLiteral('brush-icon', sanitizer.bypassSecurityTrustHtml(BRUSH_ICON));
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('pin-icon', sanitizer.bypassSecurityTrustHtml(PIN_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON));
    iconRegistry.addSvgIconLiteral('undo-icon', sanitizer.bypassSecurityTrustHtml(UNDO_ICON));
    iconRegistry.addSvgIconLiteral('redo-icon', sanitizer.bypassSecurityTrustHtml(REDO_ICON));
  }
  ngOnInit(): void {
    this.noteService.getNoteListCall().subscribe((result)=>{console.log(result)},(error)=>{console.log(error)})
    }
    takeNote: boolean = true
  handleCreateNote(){
    this.takeNote = !this.takeNote
  }
}
