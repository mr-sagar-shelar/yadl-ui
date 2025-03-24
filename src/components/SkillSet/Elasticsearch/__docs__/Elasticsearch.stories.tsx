import type { Meta, StoryObj } from "@storybook/react";
import Elasticsearch from "../Elasticsearch";

const meta: Meta<typeof Elasticsearch> = { title: "SkillSet/Elasticsearch", component: Elasticsearch };

export default meta;
type Story = StoryObj<typeof Elasticsearch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
