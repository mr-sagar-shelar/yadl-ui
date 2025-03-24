import type { Meta, StoryObj } from "@storybook/react";
import Backlog from "../Backlog";

const meta: Meta<typeof Backlog> = { title: "Azure/General/Backlog", component: Backlog };

export default meta;
type Story = StoryObj<typeof Backlog>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
