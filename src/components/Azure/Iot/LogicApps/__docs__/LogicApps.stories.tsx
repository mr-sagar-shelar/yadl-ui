import type { Meta, StoryObj } from "@storybook/react";
import LogicApps from "../LogicApps";

const meta: Meta<typeof LogicApps> = { title: "Azure/Iot/LogicApps", component: LogicApps };

export default meta;
type Story = StoryObj<typeof LogicApps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
