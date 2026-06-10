import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss',
})
export class WhyChooseUs {

  sectionTitle = 'Engineering Solutions Built On';

  highlightedTitle = 'Trust & Excellence';

  sectionDescription =
    'We combine technical expertise, industry experience, and innovative thinking to deliver reliable electrical and solar engineering solutions.';

  features = [
    {
      icon: '✓',
      title: 'Proven Expertise',
      description:
        'Experienced engineers delivering high-quality industrial and commercial projects.',
    },
    {
      icon: '⚡',
      title: 'End-To-End Solutions',
      description:
        'From design and installation to maintenance and audits, we handle everything.',
    },
    {
      icon: '🛡️',
      title: 'Safety First',
      description:
        'Strict safety standards and compliance practices on every project.',
    },
    {
      icon: '☀️',
      title: 'Sustainable Energy',
      description:
        'Modern solar solutions that reduce costs and improve environmental impact.',
    },
    {
      icon: '🚀',
      title: 'Timely Delivery',
      description:
        'Efficient project management ensures delivery on time and within budget.',
    },
    {
      icon: '🤝',
      title: 'Long-Term Partnership',
      description:
        'We build lasting client relationships through transparency and reliability.',
    },
  ];
}