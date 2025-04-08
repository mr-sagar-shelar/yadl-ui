import type { Meta, StoryObj } from "@storybook/react";
import AzureSQLServerStretchDatabases from "../AzureSQLServerStretchDatabases";

const meta: Meta<typeof AzureSQLServerStretchDatabases> = { title: "Azure/Integration/AzureSQLServerStretchDatabases", component: AzureSQLServerStretchDatabases };

export default meta;
type Story = StoryObj<typeof AzureSQLServerStretchDatabases>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
