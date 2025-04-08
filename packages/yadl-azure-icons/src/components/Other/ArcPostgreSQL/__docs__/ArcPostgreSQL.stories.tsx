import type { Meta, StoryObj } from "@storybook/react";
import ArcPostgreSQL from "../ArcPostgreSQL";

const meta: Meta<typeof ArcPostgreSQL> = { title: "Azure/Other/ArcPostgreSQL", component: ArcPostgreSQL };

export default meta;
type Story = StoryObj<typeof ArcPostgreSQL>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
