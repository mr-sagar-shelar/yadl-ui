import type { Meta, StoryObj } from "@storybook/react";
import GraphQL from "../GraphQL";

const meta: Meta<typeof GraphQL> = { title: "SkillSet/GraphQL", component: GraphQL };

export default meta;
type Story = StoryObj<typeof GraphQL>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
