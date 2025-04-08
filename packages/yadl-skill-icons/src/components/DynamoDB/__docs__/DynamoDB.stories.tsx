import type { Meta, StoryObj } from "@storybook/react";
import DynamoDB from "../DynamoDB";

const meta: Meta<typeof DynamoDB> = { title: "SkillIcon/DynamoDB", component: DynamoDB };

export default meta;
type Story = StoryObj<typeof DynamoDB>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
