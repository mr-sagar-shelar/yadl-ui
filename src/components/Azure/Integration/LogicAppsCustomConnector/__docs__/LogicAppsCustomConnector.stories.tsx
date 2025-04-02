import type { Meta, StoryObj } from "@storybook/react";
import LogicAppsCustomConnector from "../LogicAppsCustomConnector";

const meta: Meta<typeof LogicAppsCustomConnector> = { title: "Azure/Integration/LogicAppsCustomConnector", component: LogicAppsCustomConnector };

export default meta;
type Story = StoryObj<typeof LogicAppsCustomConnector>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
