import type { Meta, StoryObj } from "@storybook/react";
import ArcSQLServer from "../ArcSQLServer";

const meta: Meta<typeof ArcSQLServer> = { title: "Azure/Other/ArcSQLServer", component: ArcSQLServer };

export default meta;
type Story = StoryObj<typeof ArcSQLServer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
