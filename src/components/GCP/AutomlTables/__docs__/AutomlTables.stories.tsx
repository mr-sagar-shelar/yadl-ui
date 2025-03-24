import type { Meta, StoryObj } from "@storybook/react";
import AutomlTables from "../AutomlTables";

const meta: Meta<typeof AutomlTables> = { title: "GCP/AutomlTables", component: AutomlTables };

export default meta;
type Story = StoryObj<typeof AutomlTables>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
