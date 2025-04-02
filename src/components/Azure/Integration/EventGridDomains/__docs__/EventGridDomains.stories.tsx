import type { Meta, StoryObj } from "@storybook/react";
import EventGridDomains from "../EventGridDomains";

const meta: Meta<typeof EventGridDomains> = { title: "Azure/Integration/EventGridDomains", component: EventGridDomains };

export default meta;
type Story = StoryObj<typeof EventGridDomains>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
