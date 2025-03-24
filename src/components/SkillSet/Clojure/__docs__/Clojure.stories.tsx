import type { Meta, StoryObj } from "@storybook/react";
import Clojure from "../Clojure";

const meta: Meta<typeof Clojure> = { title: "SkillSet/Clojure", component: Clojure };

export default meta;
type Story = StoryObj<typeof Clojure>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
