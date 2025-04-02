import { Component } from '@angular/core';

@Component({
  selector: 'app-internship',
  standalone: false,
  templateUrl: './internship.component.html',
  styleUrl: './internship.component.css'
})
export class InternshipComponent {
  internships = [
    {
      image: 'assets/images/internship1.jpg',
      title: 'salesforce developer virtual internship',
      company: 'Smart internz',
      duration: 'June 2023 - August 2023',
      description: 'A Salesforce Virtual Developer Internship offers aspiring developers a hands-on, remote experience to learn and apply Salesforce development skills through real-world projects and mentorship, ultimately preparing them for careers in the Salesforce ecosystem. .',
      technologies:['HTML','CSS','Javascript', 'Apex', 'Visualforce', 'Lightning Web Components (LWC)',]
    },
    {
      image: 'assets/images/internship2.jpg',
      title: 'cisco cyber security',
      company: 'cisco network academy',
      duration: 'January 2023 - May 2023',
      description: 'Cisco Networking Academy or a similar program, offers hands-on experience in cybersecurity, focusing on skills like threat detection, network security, and risk management, potentially culminating in a certification we will  learn vital skills like threat intelligence, network security, and risk management to protect yourself and organizations from cyber attacks',
      technologies: ['network security', 'monitoring tools', 'vulnerability scanners', 'firewalls',  'programming languages like Python']
    },
    {
      image: 'assets/images/internship3.jpg',
      title: 'microsoft azure fundamentals',
      company: 'microsoft',
      duration: 'may 2023 - june 2023',
      description: 'The Microsoft Azure Fundamentals certification validates foundational knowledge of cloud concepts, core Azure services, and Azure management tools. It is designed for individuals beginning their cloud journey or seeking to demonstrate basic proficiency in Microsoft Azure. .',
      technologies: ['Kubernetes', 'PostgreSQL', 'MySQL', 'Redis', 'Apache', 'Cassandra', 'MongoDB']
    }
  ];
}


