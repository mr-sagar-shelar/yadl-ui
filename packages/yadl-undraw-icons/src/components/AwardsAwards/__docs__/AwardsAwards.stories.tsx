import type { Meta, StoryObj } from "@storybook/react";
import AwardsAwards from "../AwardsAwards";

const meta: Meta<typeof AwardsAwards> = { title: "unDraw/AwardsAwards", component: AwardsAwards };

export default meta;
type Story = StoryObj<typeof AwardsAwards>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
