import type { Meta, StoryObj } from "@storybook/react";
import TemplateSpecs from "../TemplateSpecs";

const meta: Meta<typeof TemplateSpecs> = { title: "Azure/Other/TemplateSpecs", component: TemplateSpecs };

export default meta;
type Story = StoryObj<typeof TemplateSpecs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
