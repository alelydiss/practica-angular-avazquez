import { Component } from '@angular/core';
import { ValorantService } from '../valorant.service';

@Component({
  selector: 'app-bienvenida',
  standalone: false,
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {
  agents: any[] = [];
  filteredAgents: any[] = [];
  selectedRole: string = '';

  constructor(private valorantService: ValorantService) {}

  ngOnInit(): void {
    this.valorantService.getAgents().subscribe((agents) => {
      this.agents = agents.filter((agent: any) => agent.isPlayableCharacter);
      this.filteredAgents = [...this.agents];
    });
  }
  

  getAgentGradient(agent: any): string {
    return agent.backgroundGradientColors
      ? `linear-gradient(135deg, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[1]})`
      : '#333';
  }
  
  filterAgents(role: string): void {
    this.selectedRole = role;
    this.filteredAgents = role === '' ? this.agents : this.agents.filter(agent => agent.role?.displayName === role);
  }
}

