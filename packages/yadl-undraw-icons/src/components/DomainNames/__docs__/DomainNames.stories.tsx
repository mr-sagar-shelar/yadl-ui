import type { Meta, StoryObj } from "@storybook/react";
import DomainNames from "../DomainNames";

const meta: Meta<typeof DomainNames> = { title: "unDraw/DomainNames", component: DomainNames };

export default meta;
type Story = StoryObj<typeof DomainNames>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
