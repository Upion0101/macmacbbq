import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();

  // Business status
  status: 'open' | 'soon' | 'closed' = 'closed';
  statusLabel = 'Closed';

  ngOnInit() {
    this.updateStatus();
  }

  private updateStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 6 = Sat
    const minutesNow = now.getHours() * 60 + now.getMinutes();

    const hours: Record<number, { open: number; close: number } | null> = {
      0: null,              // Sun
      1: null,              // Mon
      2: null,              // Tue
      3: { open: 660, close: 1200 }, // Wed 11:00–8:00
      4: { open: 660, close: 1200 }, // Thu 11:00–8:00
      5: { open: 660, close: 1230 }, // Fri 11:00–8:30
      6: { open: 660, close: 1230 }, // Sat 11:00–8:30
    };

    const today = hours[day];

    if (!today) {
      this.status = 'closed';
      this.statusLabel = 'Closed today';
      return;
    }

    if (minutesNow < today.open) {
      this.status = 'closed';
      this.statusLabel = 'Closed';
      return;
    }

    const minutesLeft = today.close - minutesNow;

    if (minutesLeft <= 0) {
      this.status = 'closed';
      this.statusLabel = 'Closed';
    } else if (minutesLeft <= 30) {
      this.status = 'soon';
      this.statusLabel = 'Closing soon';
    } else {
      this.status = 'open';
      this.statusLabel = 'Open now';
    }
  }
}
